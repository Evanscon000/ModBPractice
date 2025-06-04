import {beforeEach, describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import NineLine from "../components/NineLine.tsx";
import '@testing-library/jest-dom';
import {userEvent} from "@testing-library/user-event";


describe('Nine Line Input Page', ()=> {
    beforeEach(() => {
        // resets any mock functions between tests so each is fresh.
         vi.clearAllMocks();
        });

    it('should display the nine line app header with the input forms', () => {
        render(
            <MemoryRouter>
                <NineLine/>
            </MemoryRouter>
        )

        expect(screen.getByRole('heading')).toBeVisible();

        // create a list (array)of input field names so the for...of loop is able to loop.
        const lineNames = ["Line1","Line2","Line3","Line4","Line5","Line6","Line7","Line8","Line9",]

        // the actual test portion of the loop
        for (const label of lineNames) {
            expect(screen.getByLabelText(label)).toBeVisible()
        }

        //--------------------------------------------------------------------------------------------------------------
        // this loop above replaces the line below, the line below was repeated 9 times and excessive.
        // the loop accomplishes DRY (don't repeat yourself)
        // expect(screen.getByLabelText('Line1')).toBeVisible()
        //--------------------------------------------------------------------------------------------------------------
    });

        it('lets user type in inputs and click submit button', async () =>{
            render(
                <MemoryRouter>
                    <NineLine/>
                </MemoryRouter>
            )

            //create a list (array) of input field names so the for...of can loop correctly.
            const lineNames = ["Line1","Line2","Line3","Line4","Line5","Line6","Line7","Line8","Line9",]

            //for...of loop (specific to JavaScript and TypeScript usable in React with JSX/TSX)
            //for...of works with await and waits for it to finish before moving on unlike a forEach
            for (const line of lineNames) {
                const input = screen.getByPlaceholderText(new RegExp(line, "i"));
                await userEvent.type(input, `Test ${line}`);
                expect(input).toHaveValue(`Test ${line}`);
            }

            // ---------------------------------------------------------------------------------------------------------
            // the for...of loop above replaces the code below (the code below was duplicated 9 times one for every line)
            // using the for...of loop took 27 lines of code down to 6
            // const Line1 = screen.getByPlaceholderText(/Line1/i);
            // await userEvent.type(Line1, "Test Line1");
            // expect(Line1).toHaveValue("Test Line1");
            // ---------------------------------------------------------------------------------------------------------

            const submitBtn = screen.getByRole('button', { name: /submit/i });
            expect(submitBtn).toBeVisible();
            await userEvent.click(submitBtn);
        })


    });
