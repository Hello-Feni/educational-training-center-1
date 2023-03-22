import React from 'react';
import image from '../../../images/Rakibul.png'
import image1 from '../../../images/sujon.png'
<<<<<<< HEAD
<<<<<<< HEAD
import image2 from '../../../images/mamun.png'
=======
import image2 from '../../../images/mamun.jpg'
>>>>>>> sujon
=======



import image2 from '../../../images/mamun.jpg'

>>>>>>> b0ca97341b30a8ca3d86079fd08bd6df0162c3ac
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons'

import TrainerDetails from '../TrainerDetails/TrainerDetails';


const TrainerData=[
    {
        number:'0156524165',
        name:'Mr Rakib',
        course:'Python',
        image:image,
        icon:faPhoneVolume
        
    },
    {
        number:'0156524165',
<<<<<<< HEAD
<<<<<<< HEAD
        name:'Shariful Islam',
=======
        name:'Mr Mamun',
>>>>>>> sujon
=======

        name:'Shariful Islam',
 name:'Mr Mamun',

>>>>>>> b0ca97341b30a8ca3d86079fd08bd6df0162c3ac
        course:'React',
        image:image2,
        icon:faPhoneVolume
        
    },
    {
        number:'0156524165',
        name:'Mr Sujon',
        course:'Javascript',
        image:image1,
        icon:faPhoneVolume
        
    }
]
const Trainer = () => {
    return (
        <section >
             <div className="text-center mt-3 my-5 "> 
             <h4 className="text-primary fw-bold">Popular Trainer</h4>
             </div>
             <div className="row d-flex justify-content-center">
               {
               TrainerData.map(trainer=><TrainerDetails trainer={trainer}></TrainerDetails> )  
               }
               </div>
        </section>
    );
};

export default Trainer;