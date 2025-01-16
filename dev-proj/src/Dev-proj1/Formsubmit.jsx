import React from 'react'
import Formstyle from './../Dev-proj1/Formstyle'

const Formsubmit = () => {
    return (
        <div>
            <h1>Form In React</h1>
            <fieldset>
                <form>
                    <label>
                        First Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter first name"
                    />
                    <label>
                        Last Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Last name"
                    />
                    <label>
                        Enter Email
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                    />
                    <label>
                        Contact
                    </label>
                    <input
                        type="number"
                        placeholder="Enter your Mobile"
                    />
                    <label>
                        Gender
                    </label>
                    <input
                        type="radio"

                    />
                    Male
                    <input
                        type="radio"
                    />
                    Female
                    <input
                        type="radio"
                    />
                    Others
                    <label >
                        Your best subject
                    </label>
                    <input
                        type='checkbox'
                    />
                    English
                    <input
                        type='checkbox'
                    />
                    Telugu
                    <input
                        type='checkbox'
                    />
                    Hindi
                    <label>
                        Upload Resume
                    </label>
                    <input
                        type='file'
                        placeholder='Enter upload file'
                    />
                    <label >
                        Enter URL
                    </label>
                    <input
                        type='url'
                        placeholder='Enter your url' />
                    <label >
                        select your choice
                    </label>
                    <select>
                        <option>
                            Select your Ans
                        </option>
                        <optgroup label='Beginner'>
                            <option>Html</option>
                            <option>CSS</option>
                        </optgroup>
                        <optgroup label='Intermediate'>
                            <option>React</option>
                            <option>Node</option>
                        </optgroup>
                        <option value="t">
                            MongoDB
                        </option>
                    </select>
                    <label >
                        About
                    </label>
                    <textarea placeholder = "About Your Self">
                        
                    </textarea>
                    <button>
                        Reset
                    </button>
                    <button>
                        Submit
                    </button>


                </form>
            </fieldset>
            <Formsubmit/>
        </div>
    )
}

export default Formsubmit
