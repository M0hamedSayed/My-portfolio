import './ResumeHeading.css';

const ResumeHeading = (props) => {
    return (
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <div className='main-heading'>
                        <span></span>
                        <span><h4>{props.heading ? props.heading : ''}</h4></span>
                    </div>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + '_' + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>

                </div>

            </div>

        </div>
    );
}