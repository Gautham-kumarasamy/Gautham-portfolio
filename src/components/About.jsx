import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import Table from './common/Table';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  const skillsData = [
    { id: 1, category: 'Frontend', technology: 'React', proficiency: 'Expert', years: '3+' },
    { id: 2, category: 'Frontend', technology: 'JavaScript', proficiency: 'Expert', years: '4+' },
    { id: 3, category: 'Frontend', technology: 'HTML/CSS', proficiency: 'Expert', years: '4+' },
    { id: 4, category: 'Backend', technology: 'ASP.NET Core', proficiency: 'Expert', years: '2+' },
    { id: 5, category: 'Backend', technology: 'C#', proficiency: 'Expert', years: '3+' },
    { id: 6, category: 'Backend', technology: 'Web APIs', proficiency: 'Expert', years: '2+' },
    { id: 7, category: 'Cloud', technology: 'Azure', proficiency: 'Advanced', years: '2+' },
    { id: 8, category: 'Cloud', technology: 'AWS', proficiency: 'Intermediate', years: '1+' },
    { id: 9, category: 'DevOps', technology: 'Azure Pipelines', proficiency: 'Advanced', years: '2+' },
    { id: 10, category: 'DevOps', technology: 'Docker', proficiency: 'Intermediate', years: '1+' },
    { id: 11, category: 'Infrastructure', technology: 'Terraform', proficiency: 'Intermediate', years: '1+' },
    { id: 12, category: 'Database', technology: 'SQL Server', proficiency: 'Advanced', years: '3+' },
    { id: 13, category: 'Database', technology: 'MongoDB', proficiency: 'Intermediate', years: '1+' }
  ];

  const skillsColumns = [
    {
      key: 'category',
      header: 'Category',
      render: (value) => (
        <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-green-400 to-pink-400 text-black">
          {value}
        </span>
      )
    },
    {
      key: 'technology',
      header: 'Technology',
      cellClassName: 'font-semibold text-green-300'
    },
    {
      key: 'proficiency',
      header: 'Proficiency',
      render: (value) => (
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          value === 'Expert' ? 'bg-green-900 text-green-200 border border-green-400' :
          value === 'Advanced' ? 'bg-blue-900 text-blue-200 border border-blue-400' :
          'bg-yellow-900 text-yellow-200 border border-yellow-400'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'years',
      header: 'Experience',
      cellClassName: 'text-pink-300 font-medium'
    }
  ];

  return (
    <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          {/* Introduction Section */}
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm Gautham Kumarasamy, a 2023 graduate🎓 with a passion for crafting robust frontend and backend applications.
              As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/gautham-kumarasamy-6046181a9/' target='_blank' rel='noopener noreferrer'>Software developer</a> I specialize in Microsoft technologies, focusing on ASP.NET for backend development. My expertise extends to Azure Pipelines for CI/CD, and I am proficient in frontend development with React. Additionally, I have strong experience with Terraform for infrastructure as code. 🚀
              <br />
            </p>
            <ButtonLink
              url=''
              text='View Resume →'
              padding={`p-3`}
            />
          </div>

          {/* Services Cards Section */}
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service, index) => (
              <ServiceCard key={service.id || index} service={service} />
            ))}
          </div>

          {/* Skills Table Section */}
          <div className='sm:px-16 px-2 mt-20'>
            <h2 className='text-3xl sm:text-4xl font-extrabold mb-8 text-center'>
              <span className='bg-gradient-to-r from-green-400 to-pink-400 bg-clip-text text-transparent'>
                Technical Skills & Expertise
              </span>
            </h2>
            
            {/* Using the reusable Table component */}
            <Table 
              data={skillsData} 
              columns={skillsColumns}
              theme="dark"
              variant="gradient"
              size="medium"
              striped={true}
              hoverable={true}
              className="mb-8"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;