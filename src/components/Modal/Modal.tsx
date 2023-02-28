import { useAppDispatch} from '../../hook'
import './Modal.scss'

interface ModalProps {
    id: string,
    title: string,
    description: string,
    completed: boolean
}

export const Modal: React.FC <ModalProps>  = ({id, title, description, completed}) => {
    return (
        <div className="modal">
            <div className="modal__title">{title}</div>
            <div className="modal__section-name">Description</div>
            <div className="modal__description">{description}</div>
            <div className="modal__status">Status:<input type="checkbox" checked = {completed} /></div>
            <button className="modal__close">Close</button>
        </div>
    );
};