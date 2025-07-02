import {useForm} from "react-hook-form";

export default function  AddTaskModal(){
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={"text"} {...register("name")} />
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}