import { Form } from "@/components/form/Form";

export default function AddTask() {
    /* const {state, dispatch} = useContext(contexto)
    const router = useRouter()

    useEffect(() => {
        let tasks = taskApi
        dispatch({
            type: 'TASK',
            payload: tasks 
        })
    }, []); */

    return (
        <>
           <Form isEdit={false}/>
            
        </>
    )
}