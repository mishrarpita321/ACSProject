// import Header from "../Header/Header";
import Header from "../Header/Header";
import IFrame from "../IFrame/IFrame"

const Combined = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{ color: 'blueviolet', fontFamily: 'cursive' }}>Upload Video</h1>
                        <IFrame />
                    </div>
                    <div className="col-md-6">
                        <h1 style={{ color: 'blueviolet', fontFamily: 'cursive' }}>Upload Image</h1>
                        <IFrame />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Combined;