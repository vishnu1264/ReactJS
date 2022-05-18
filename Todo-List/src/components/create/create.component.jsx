// import { useState } from "react";

// const Item = () => {

//     const addItems = (inpName, inpDesc) => {
//         if(inpName === '' || inpDesc === '')
//             return;
//         setTodoList([...todoList, {id: 1, name: inpName, description: inpDesc}]);
//         localStorage.setItem('ToDo-List', JSON.stringify(todoList));
//     }

//     localStorage.setItem('ToDo-List', JSON.stringify(todoList));

//     return(
//         <div className='form'>
//         <div>
//           <label>Name :</label>
//           <input
//             className='name-input'
//             value={inpName}
//             onChange={(event) => setInpName(event.target.value)}
//           />
//         </div>
//         <div>
//           <label>Description :</label>
//           <input
//             className='desc-input'
//             value={inpDesc}
//             onChange={(event) => setInpDesc(event.target.value)}
//           />
//         </div>
//         <button onClick={() => addItems(inpName, inpDesc)} type="button">Save</button>
//       </div>
//     )
// }

// export default Item;