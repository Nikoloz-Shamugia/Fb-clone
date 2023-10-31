import React, { useState } from 'react';
import PostInput from './PostInput';
import PostModal from './PostModal';
import PostList from './PostList';

const MainPage = () =>{
    const username = localStorage.getItem('username')
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleInputClick = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleXIconClick = () => {
        setIsModalVisible(false);
    };
    const globalStyles = {
        margin :'0',
        padding:'0',
        background :'rgb(52, 49, 49)',
        width :'100%' ,
        height :'100vh',
        display:'grid',
        placeItems:'center'
    }

    const [value ,setValue] = useState("")
    const [listItems, setListItems] = useState([]);

    const handleInputChange = (e) => {
        setValue(e.target.value);
      };
    
      const handleClick = () =>{
        setListItems([...listItems, value]);
        setValue('');
      }
    const postStyle ={
        width :'560px',
        height :'auto' ,
        padding :'20px 30px' ,
        background :'rgb(69, 69, 69)',
        borderRadius :'10px',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
        color :'white' , 
        margin :'20px 0',
        display :'flex',
        justifyContent :'space-between',
        wordWrap: 'break-word',
    }
    const handleDeleteTodoItem = (indexToDelete) => {
        setListItems((prevItems) =>
          prevItems.filter((_, index) => index !== indexToDelete)
        );
      };

    return(
        <div style={globalStyles}>
            <PostInput
                username={username}
                handleInputClick={handleInputClick}
            />
            <PostModal
                isModalVisible={isModalVisible}
                handleXIconClick={handleXIconClick}
                value={value}
                handleInputChange={handleInputChange}
                handleClick={handleClick}
                username={username}
            />
            <PostList
                listItems={listItems}
                postStyle={postStyle}
                handleDeleteTodoItem={handleDeleteTodoItem}
            />
        </div>
    )
}
export default MainPage 