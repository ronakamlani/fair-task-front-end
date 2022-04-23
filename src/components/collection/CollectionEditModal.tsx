import { CollectionEditModalIProps } from "../../interface/props/CollectionEditModalIProps.interfact";
import CollectionEditModalForm from "./CollectionEditModalForm";

const CollectionEditMeModal = ({isOpen,closeMe,loading,collection,doSubmit}:CollectionEditModalIProps)=>{

    if(!collection){
      return(
        <>
        </>
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
  <div className="relative p-4 w-full max-w-md h-full md:h-auto m-auto">
    {/* Modal content */}
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 m-auto">
      <div className="flex justify-end p-2">
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
          onClick={closeMe}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <CollectionEditModalForm 
        collection={collection}
        loading={loading}
        doSubmit={doSubmit}
      />
    </div>
  </div>
</div>
{isOpen?(<div modal-backdrop="" className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>):null}
</>
    );
}

export default CollectionEditMeModal;