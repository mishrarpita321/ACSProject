import ComboFaceBar from '../ComboFaceBar/ComboFaceBar';
import style from './ComboFaceContainer.module.css';

const ComboFaceContainer = ({ data, onTimeFaceClick }) => {
    console.log('here in combo', data.data);
    return (
        <>
            {
                data.data.map((item, index) => {
                    return (
                        <div className={`col-12 col-lg-10 ${style.comboFaceCategory}`} key={index}>
                            <div className={`text-capitalize ${style.sentimentTitle}`}>
                                {item.sentiment} ({item.faces.length})
                            </div>
                            <div className={`${style.comboFaceListContainer}`}>
                                {
                                    item.faces.map((face, index) => {
                                        return (
                                            <div onClick={() => onTimeFaceClick(face.time)} title={face.time} className={`d-flex ${style.comboFaceCard}`} key={index}>
                                                <div className='d-flex justify-content-center'>
                                                    <img style={{ height: '60px', background: '#000000' }} src={face.image} alt="face" />
                                                </div>
                                                {
                                                    face.features.map((feature, index) => {
                                                        return (
                                                            <ComboFaceBar key={index} Feature={feature.feature} percentage={feature.percentage} colorCode={"#8e62a0"} />
                                                        );
                                                    })

                                                }
                                                <hr />
                                                <div className={style.seperatorTitle}>Confidence from Vision API</div>
                                                <ComboFaceBar Feature={item.sentiment} percentage={face.visionConfid} colorCode={"#8e62a0"} />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
};
export default ComboFaceContainer;