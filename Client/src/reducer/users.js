const users = (user = {} , action)=>{

    switch(action.type)
    {
        case 'LOGIN':
            const new_user = action.payload            
            return {...new_user};
        case 'LOGOUT':
            return {};
        default : 
            return user
    }
}


export default users;