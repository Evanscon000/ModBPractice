
const NineLine = () => {
    return (
        <div>
            <h1> Welcome to the Nine Line Reporting App </h1>

            <div>
            <input
                type = {'text'}
                placeholder={'Line 1'}
                name={'Line 1'}
                aria-label={'Line 1'}/>
            </div>

            <div>
            <input
                type={'text'}
                placeholder={'Line 2'}
                name={'Line 2'}
                aria-label={'Line 2'}/>
            </div>

            <div>
                <input
                type={'text'}
                placeholder={'Line 3'}
                name={'Line 3'}
                aria-label={'Line 3'}/>
            </div>

            <div>
                <input
                    type={'text'}
                    placeholder={'Line 4'}
                    name={'Line 4'}
                    aria-label={'Line 4'}/>
            </div>

            <div>
                <input
                    type={'text'}
                    placeholder={'Line 5'}
                    name={'Line 5'}
                    aria-label={'Line 5'}/>
            </div>

            <div>
                <input
                    type={'text'}
                    placeholder={'Line 6'}
                    name={'Line 6'}
                    aria-label={'Line 6'}/>
            </div>

            <div>
                <input
                type={'text'}
                placeholder={'Line 7'}
                name={'Line 7'}
                aria-label={'Line 7'}/>
            </div>

            <div>
                <input
                    type={'text'}
                    placeholder={'Line 8'}
                    name={'Line 8'}
                    aria-label={'Line 8'}/>
            </div>

            <div>
                <input
                    type={'text'}
                    placeholder={'Line 9'}
                    name={'Line 9'}
                    aria-label={'Line 9'}/>
            </div>

            <button type={'submit'}>Submit</button>
            <button type={'reset'}>Reset</button>
        </div>

    )

}

export default NineLine;