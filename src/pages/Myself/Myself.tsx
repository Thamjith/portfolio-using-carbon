import "./Myself.scss";

const Myself = () => {

    return (
        <div id="myself" className="myself__container">
            <h1 className="myself__title">
                <span>
                    Hi,<br />
                    My name is Thamjith Thaha. <br />
                </span>
                <span className="red-text">
                    I'm software engineer with <br />
                    {calculateExperience(startDate)} of experience.
                </span>
            </h1>
        </div>
    )
}

export default Myself

function calculateExperience(startDate: string) {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    // Adjust if the current month is before the start month
    if (months < 0) {
        years--;
        months += 12;
    }

    return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
}

// Usage
const startDate = "2020-02-01";