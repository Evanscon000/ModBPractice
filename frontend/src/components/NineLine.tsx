import {useEffect, useState} from "react";
// import {useNavigate} from "react-router-dom";

const NineLine = () => {
    // const  navigate = useNavigate()

    const [formData, setFormData] = useState({
        Line1: '',
        Line2: '',
        Line3: '',
        Line4: '',
        Line5: '',
        Line6: '',
        Line7: '',
        Line8: '',
        Line9: ''
    });

    // use this function for developing on the dev tool (f12)
    // useEffect(() => {
    //     // console.log("Updated formData:", formData);
    // }, [formData]);

    // this handleChange is the function that handles the logic behind updating individual fields of text
    const handleChange = (e:any)=>{
        const {name, value} = e.target;
        setFormData( prevState => ({...prevState,[name]: value}))
    }

    return (
        <div>
            <h1> Welcome to the Nine Line Reporting App </h1>

            <div>
            <input
                type = {'text'}
                placeholder={'Line1'}
                name={'Line1'}
                aria-label={'Line1'}
                value={formData.Line1}
                onChange={handleChange}/>
            </div>

            <div>
            <input
                type={'text'}
                placeholder={'Line2'}
                name={'Line2'}
                aria-label={'Line2'}
                value={formData.Line2}
                onChange={handleChange}/>
            </div>

            <div>
                <input
                type={'text'}
                placeholder={'Line3'}
                name={'Line3'}
                aria-label={'Line3'}
                value={formData.Line3}
                onChange={handleChange}/>
            </div>

            <div>
                <input
                    type={'text'}
                    placeholder={'Line4'}
                    name={'Line4'}
                    aria-label={'Line4'}
                    value={formData.Line4}
                    onChange={handleChange}/>
            </div>

            <div>
                <input
                    type={'text'}
                    placeholder={'Line5'}
                    name={'Line5'}
                    aria-label={'Line5'}
                    value={formData.Line5}
                    onChange={handleChange}/>
            </div>

            <div>
                <input
                    type={'text'}
                    placeholder={'Line6'}
                    name={'Line6'}
                    aria-label={'Line6'}
                    value={formData.Line6}
                    onChange={handleChange}/>
            </div>

            <div>
                <input
                type={'text'}
                placeholder={'Line7'}
                name={'Line7'}
                aria-label={'Line7'}
                value={formData.Line7}
                onChange={handleChange}/>
            </div>

            <div>
                <input
                    type={'text'}
                    placeholder={'Line8'}
                    name={'Line8'}
                    aria-label={'Line8'}
                    value={formData.Line8}
                    onChange={handleChange}/>
            </div>

            <div>
                <input
                    type={'text'}
                    placeholder={'Line9'}
                    name={'Line9'}
                    aria-label={'Line9'}
                    value={formData.Line9}
                    onChange={handleChange}/>
            </div>

            <button type={'submit'}>Submit</button>
            {/*<button type={'button'} onClick={()=>navigate('/')}>Exit</button>*/}

        </div>

    )

}

export default NineLine;