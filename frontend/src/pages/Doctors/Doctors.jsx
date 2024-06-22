import DoctorCard from './../../components/Doctors/DoctorCard'
import {doctors} from './../../assets/data/doctors'
import Testimonal from '../../components/Testimonal/Testimonal'
const Doctors = () => {
  return <>

    <section>
      <div className="container">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {doctors.map((doctor)=> (
      <DoctorCard key={doctor.id} doctor={doctor}/>
    ))}
    </div>
      </div>
    </section>
    <section>
      
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className='heading text-center'>Our Artists</h2>
          <p className='text_para text_center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum unde molestias tempora quis at beatae 
          neque, in modi non culpa. Excepturi iure quam ipsam porro beatae placeat asperiores deleniti cupiditate?</p> 
        </div>
       <Testimonal />
        </div>
      
    </section>
    </>
}

export default Doctors
