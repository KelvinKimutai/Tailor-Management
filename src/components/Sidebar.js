import SidebarItem from "./SidebarItem.js";
import items from "../data/sidebar.json";
// import user from "../images/user.jpg";

export default function Sidebar(){
    const H2={color: 'teal'}
 return (

    
    <div className="sidebar">
        <div className="logos">
            <h2 style={H2}><i>TAILORS'</i></h2>
        {/* <img className="logo" src={user} alt="user" /> */}
        </div>
        { items.map((item, index) => <SidebarItem key={index} item={item}/>) }
    </div>
 )

}