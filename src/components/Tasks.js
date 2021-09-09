import React from "react";
import {Checkbox} from "./Checkbox";

export const Tasks = () => {
    const tasks = [];

    const projectName = '';

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testedid="project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(tasks=> (
                    <li key={`${task.id}`}>
                        <checkbox id={task.id}/>
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};