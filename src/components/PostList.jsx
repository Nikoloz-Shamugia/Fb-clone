import XIcon from "../images/xIcon.png";

const PostList = ({ listItems, postStyle, handleDeleteTodoItem }) => {
    const postWrapper = {
        height :'400px' ,
        overflowY :'auto',
    }

    return (
        <div style={postWrapper}>
            {listItems.map((item, index) => (
                <div style={postStyle} key={index}>
                    {item}
                    <button onClick={() => handleDeleteTodoItem(index)}>
                        <img src={XIcon} style={{ height: '20px', width: '20px' }} alt="delete-icon" />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PostList;
