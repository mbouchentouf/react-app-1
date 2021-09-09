import {collatedTasks} from '../constants';

export const CollatedTasksExist = selectedProject =>
    collatedTasksExist.find(task => task.key === selectedProject);
