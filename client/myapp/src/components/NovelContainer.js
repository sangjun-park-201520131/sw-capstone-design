import NovelCard from "../components/NovelCard"
import "./NovelContainer.css";

const NovelContainer = () => {
    return (
        
            <div className="container">
                <div className="row">
                    <div className="col">
                    <NovelCard/>
                    </div>
                    <div className="col">
                    <NovelCard/>
                    </div>
                    <div className="col">
                    <NovelCard/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <NovelCard/>
                    </div>
                    <div className="col">
                    <NovelCard/>
                    </div>
                    <div className="col">
                    <NovelCard/>
                    </div>
                </div>
            </div>
         
    );
};

export default NovelContainer;