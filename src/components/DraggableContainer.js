import { connect } from "react-redux";
import Draggable from "./Draggable";

const mapStateToProps = state => ({
    data: state.uploadReducer.data,
    columns: state.uploadReducer.columns
});

const DraggableContainer = connect(mapStateToProps)(Draggable);
export default DraggableContainer;
