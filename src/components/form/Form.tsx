import React from 'react';
import ContentList from './ContentList';
import './Form.css';

type Props = {
    contents: ContentList[]
}

const Form = (list : Props) => {
    return (
        <div>
            <div className="form-table">
                {list.contents.map( content =>
                    <form key={content.id} >
                        <div className="form-label">
                            <label > {content.title} </label>
                        </div>
                        <div className="form-input">
                            <input
                                type="text"
                                id={content.id}
                                name={content.title}
                                placeholder={content.placeholder}
                            />
                        </div>
                    </form>
                )}
            </div>

            <div className="submit-button">
                <input
                    key="submit-button"
                    type = "submit"
                    value="Submit"
                />
            </div>

        </div>
    )
}
export default Form
