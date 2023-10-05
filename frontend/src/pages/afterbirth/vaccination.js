import React from 'react'

const vaccination = () => {
    
    const vaccination={
        "vaccinations": [
          {
            "name": "BCG Vaccine",
            "description": "Protects against tuberculosis (TB)"
          },
          {
            "name": "Hepatitis B Vaccine",
            "description": "Protects against hepatitis B, a liver infection"
          },
          {
            "name": "OPV (Oral Polio Vaccine)",
            "description": "Protects against polio"
          },
          {
            "name": "IPV (Inactivated Polio Vaccine)",
            "description": "Given in some regions instead of OPV to protect against polio"
          },
          {
            "name": "DTaP/IPV/Hib/HepB",
            "description": "A combination vaccine that protects against Diphtheria, Tetanus, Pertussis (whooping cough), Hepatitis B, Haemophilus influenzae type b (Hib), and Polio"
          },
          {
            "name": "Pneumococcal Conjugate Vaccine (PCV)",
            "description": "Protects against diseases like pneumonia, meningitis, and ear infections caused by Streptococcus pneumoniae bacteria"
          },
          {
            "name": "Rotavirus Vaccine",
            "description": "Protects against rotavirus, a common cause of severe diarrhea and dehydration in infants"
          },
          {
            "name": "Measles, Mumps, and Rubella (MMR) Vaccine",
            "description": "Protects against measles, mumps, and rubella (German measles)"
          },
          {
            "name": "Hepatitis A Vaccine",
            "description": "Protects against hepatitis A, a viral liver infection"
          },
          {
            "name": "Typhoid Conjugate Vaccine",
            "description": "Given to protect against typhoid fever"
          },
          {
            "name": "Varicella (Chickenpox) Vaccine",
            "description": "Protects against chickenpox"
          },
          {
            "name": "Japanese Encephalitis (JE) Vaccine",
            "description": "Recommended in areas where JE is prevalent"
          },
          {
            "name": "Meningococcal Conjugate Vaccine",
            "description": "Protects against meningococcal disease"
          },
          {
            "name": "Human Papillomavirus (HPV) Vaccine",
            "description": "Recommended for adolescent girls to prevent cervical cancer"
          }
        ]
      }
      
  return (
    <div className='px-[15px] py-[30px]'>
        <div className='flex items-center w-[100%] h-[200px] bg-[#e7eafd] shadow-xl rounded-[20px]'>
            <div className='w-[60%] h-[100%] flex flex-col justify-center items-center'>
                <h1 className='text-[#92a0fa] font-bold text-[30px]'>Vaccination</h1>
                <h1 className='text-[#92a0fa] font-bold text-[25px]'>Schedule</h1>
            </div>
        <img className='w-[150px] h-[100px]' src='/assets/vaccination.png'/>
        </div>
        <div className='p-[10px] shadow-xl mt-[10px]'>
        {vaccination.vaccinations.map((option, index) => (
                    <div key={index} className='bg-[#d9defb] w-[100%]  rounded-2xl my-[10px] px-[15px] py-[5px]'>
                        <h1 className='text-[#293585]'>{index+1}</h1>
                        <h1 className='text-[#293585] my-[1px] font-lg' >Name: {option.name}</h1>
                        <h1 className='text-[#293585] font-lg' >Details: {option.description}</h1>
                    </div>
                ))}
            
        </div>
    </div>
  )
}

export default vaccination