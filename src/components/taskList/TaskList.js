import React from 'react'
import TaskItem from '../taskItem/TaskItem'

const TaskList = ({tasks,handleComplete,handleDelete}) => {
          console.log(tasks)
          return (
                    <div>
                           {tasks.map(elt => <TaskItem todo={elt} key={elt.id}
                           handleComplete={handleComplete}
                           handleDelete={handleDelete}/>)}   
                    </div>
          )
}

export default TaskList
