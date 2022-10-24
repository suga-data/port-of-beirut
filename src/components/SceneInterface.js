import React from 'react';

export default function SceneInterface({selectCamera}) {

    const textStyle = {
        color: 'magenta',
        marginLeft: '10px',
        cursor: 'zoom-in',
    }


    return (
        <div style={{ margin: '10px', position: 'fixed', marginTop: 0, width: '200px', padding: '10px', zIndex: 10, backgroundColor:'rgb(0,0,0,0.4'}}>
            <b style={{color:'white'}}>select camera</b>  
            <li onClick={() => (selectCamera(0))} style={textStyle}>top view</li>
            <li onClick={() => (selectCamera(1))} style={textStyle}>1.0_khouri</li>
            <li onClick={() => (selectCamera(2))} style={textStyle}>1.0_khouri_2</li>
            <li onClick={() => (selectCamera(3))} style={textStyle}>3.0_sea</li>
        </div>
    );
}



// {
//     "cameraMetaData":
//     {
//         "id":0,
//         "name":"Top View",
//         "time":"",
//         "position":{
                // "x":967.308,"y":24.5666,"z":1629.31},
//         "rotation":{"x":0,"y":0,"z":0},
//         "focalLength":24
//     }
// }