import { useState} from "react";

const AddBlogForm = () => {
    const [title, setTitle] = useState ("");
    const [text, setText] = useState("");

    const handleSave = () => {
    }
        return (
            <div>
                <h2>Lägg till blogginlägg</h2>
                <form>
                    <p>Titel</p>
                    <input type="text"
                    placeholder="Min titel"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} />

                    <p>Text</p>
                    <textarea
                    placeholder="Min text"
                    onChange={(e) => setText(e.target.value)}
                    value={text} />

                    <button onClick={handleSave}>Spara</button>
                </form>
            </div>
        )    
    
}
export default AddBlogForm;
