// import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

// class CardList extends Component {
//   render() {
//     // console.log("render from CardList");
//     const { monsters } = this.props;
//     // console.log(this.props);
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           // <h1 key={monster.id}>{monster.name}</h1>
//           return (
//             <Card monster={monster} />
//           );
//         })}
//       </div>
//     );
//   }
// }

const CardList = ({monsters}) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return (
        <Card monster={monster} />
      );
    })}
  </div>
)

export default CardList;
