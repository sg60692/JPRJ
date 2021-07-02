export default (status=0,action) => {
    console.log(action);
    console.log(action.type.data);
    switch(action.type.data){
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return status;
    }
}