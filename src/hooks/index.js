/* eslint-disable no-nested-ternary*/
import {useState, useEffect} from "react";
import {firebase} from '../firebase';
import {collatedTasksExist} from '../hekpers';
import moment from 'moment';

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', '5MDfbb99qpE');

        unsubscribe =
            selectedProject && !collatedTasksExist(selectedProject)
                ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
                : selectedProject === 'TODAY'
                ? (unsubscribe = unsubscribe.where(
                    'date',
                    '==',
                    moment().format('DD/MM/YYYY')
                  ))
                : selectedProject === 'INBOX'  || selectedProject === 0
                ? (unsubscribe = unsubscribe.where('date', '==', ''))
                : unsubscribe;

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.doc.map(task ({
                id: task.id,
                ...task.data(),
            }));

            setTasks(
                selectedProject === 'NEXT_7'
                ? newTasks.filter(
                    task =>
                        moment(task.date, 'DD/MM/YYYY').diff(moment(), 'days') <= 7 &&
                        task.archived !==true
                    )
                : newTasks.filter(task.archived !== true)
            );
        });

        return () => unsubscribe();
    },[selectedProject]);

    return {tasks, archivedTasks};
};

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .where('userId', '==', '5MDfbb99qpE')
            .orderBy('projectId')
            .getScopes()
            .then(snapshot => {
                const allProjects = snapshot.doc.map(project=> ({
                    ...project.data(),
                    docId: project.id,
                }));

                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects);
                }
            });
    }, [projects]);

    return {projects, setProjects};
};
