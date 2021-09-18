
export const Feedback = ({feedback, success = true}) => {
    const classe = success ? "text-success" : "text-danger"
    console.log(feedback)
    return (
        <div className="my-2">
            <span className={classe}>{feedback}</span>
        </div>
    )
}