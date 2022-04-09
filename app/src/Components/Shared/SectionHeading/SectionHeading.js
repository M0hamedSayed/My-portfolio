import './SectionHeading.css';
const SectionHeading = (props) => {
    return (
        <div className="headingContainer mx-auto text-center ">
            <h2 className='px-5'>{props.title}</h2>
            <p className='pb-1'>{props.subHeading}</p>
            <div className='shape'>
                <div className='circle'></div>
            </div>
        </div>
    );
}
export default SectionHeading;