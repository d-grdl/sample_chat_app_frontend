import React from 'react'
import ReactDOM from 'react-dom';
import user from '../utiles/user.json'

type ImageProps = {
    src: string
};

export const ImageSetItem = ({ src }: ImageProps): JSX.Element => {
        return <>
            <div className="col s4">
                <div className="card">
                    <div className="card-image cut-image">
                        <img src={src} />
                    </div>
                </div>
            </div>
        </>
    }
