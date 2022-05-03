import { RemindMeModalIProps } from "../../interface/props/RemindMeModalIProps.interface";
import Loading from "../common/Loading";
import RemindMeModalForm from "./RemindMeModalForm";

const ReminderMeModal = ({isOpen,closeMe,loading,collection,doSubmit}:RemindMeModalIProps)=>{

    if(!collection){
      return(
        null
      )
    };
    
    const mainClass= isOpen?"overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
        :"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full";
    return(
    <>
    <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        aria-modal="true"
        role="dialog"
        className={mainClass}
>
  <div className="relative p-4 w-full max-w-md h-full md:h-auto m-auto z-40">
    {/* Modal content */}
    <div className="relative bg-white rounded-lg shadow bg-gray1 m-auto">
      <RemindMeModalForm 
        collection={collection}
        loading={loading}  
        doSubmit={doSubmit}
      />
    </div>
  </div>
  {isOpen?(<div onClick={closeMe} className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0"></div>):null}
  </div>
  </>
    );
}

export default ReminderMeModal;