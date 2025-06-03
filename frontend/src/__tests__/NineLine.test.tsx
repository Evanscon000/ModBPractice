import {beforeEach, describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import NineLine from "../components/NineLine.tsx";
import '@testing-library/jest-dom';


describe('Nine Line Input Page', ()=> {
    beforeEach(() => {
        // resets any mock functions between tests so each is fresh.
         vi.clearAllMocks();
        });

    it('should display the nine line app header with the input forms', () =>{
        render(
            <MemoryRouter>
                <NineLine/>
            </MemoryRouter>
        )

        expect(screen.getByRole('heading')).toBeVisible();

        expect(screen.getByLabelText('Line 1')).toBeVisible()
        expect(screen.getByLabelText('Line 2')).toBeVisible()
        expect(screen.getByLabelText('Line 3')).toBeVisible()
        expect(screen.getByLabelText('Line 4')).toBeVisible()
        expect(screen.getByLabelText('Line 5')).toBeVisible()

        expect(screen.getByRole('button', {name: /submit/i })).toBeVisible()
        expect(screen.getByRole('button', {name: /reset/i })).toBeVisible()




    })



})