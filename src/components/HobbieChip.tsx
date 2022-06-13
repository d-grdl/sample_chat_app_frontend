import React from 'react'

type HobbieProps = {
    hobbie: string
};

export const HobbieChip = ({ hobbie }: HobbieProps): JSX.Element => {
    return <>
        <div className="chip hobbychip">
            {hobbie}
        </div>
    </>
}
