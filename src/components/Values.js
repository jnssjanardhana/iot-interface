import React, { useEffect, useState } from 'react'
import { db } from "../firebase";
import { collection, onSnapshot } from 'firebase/firestore';
import "./Values.css";
import Header from './Header';

function Values() {
    const [info, setInfo] = useState([]);
    const fileRef = collection(db, `/waterpressure`);
    useEffect(() => {
        onSnapshot(
          fileRef,
          querySnapshot => {
            const info = []
            querySnapshot.forEach((doc) => {
              const { pressure_value } = doc.data()
              info.push({ 
                id: doc.id, 
                pressure_value
            })
            })
            setInfo(info);
          }
        )
      },[]);
    return (
        <div className = "values">
          <Header />
          <h1>Pressure Value: (kg/cm2)</h1>
            {info.map((item, index) => 
            <div className="inside_block">
              <h2 className='pressure'>{item.pressure_value}</h2>
            </div>
            )}
        </div>
    )
}

export default Values
