import Link from "next/link";
import { CollectionComponentProps } from "../../interface/props/CollectionComponentProps";
import { getRedableDate } from "../../utility/date";
import MyButton from "../common/MyButton";

const CollectionGrid = ({collection,onReminderClicked,onEditClicked}:CollectionComponentProps)=>{
    
    
    return(
        <div className="w-full h-48 flex flex-col justify-between items-start bg-gray1 rounded-lg border border-gray2 mb-6 py-5 px-4">
  <div>
    <h4 className="text-gray-800 font-bold mb-3">{collection.name}</h4>
    
  </div>
  <div className="w-full flex flex-col items-start">
    <div
      className="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center"
      aria-label="Due on"
      role="contentinfo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-alarm"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx={12} cy={13} r={7} />
        <polyline points="12 10 12 13 14 13" />
        <line x1={7} y1={4} x2="4.25" y2={6} />
        <line x1={17} y1={4} x2="19.75" y2={6} />
      </svg>
      <p className="ml-2">
      {collection.launchDate? 
                    (getRedableDate(collection.launchDate))
                    :("Comming soon.")}
      </p>
    </div>
    <div className="flex items-center justify-between text-gray-800 w-full">
    <button
        className="w-8 h-8 rounded-full bg-green-300 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black"
        aria-label="edit note"
        role="button"
        onClick={()=>{
            onReminderClicked(collection)
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="20px" height="20px" viewBox="0 0 24 24"><path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm8.707-5.707L19 14.586V10c0-3.217-2.185-5.926-5.145-6.743C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.997.997 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.997.997 0 0 0-.293-.707zM16 12h-3v3h-2v-3H8v-2h3V7h2v3h3v2z"/></svg>
      </button>

      <button
        className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black"
        aria-label="edit note"
        role="button"
        onClick={()=>{
            onEditClicked(collection)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-pencil"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
        </svg>
      </button>
    </div>
  </div>
</div>

    )

   /* return(
        <div className="md:w-1/3 w-full pb-8 px-2">
        <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-2xl">
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{collection.name}</div>
            <p className="text-gray-700 text-base">
                Contest is at : {collection.launchDate? 
                    (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{getRedableDate(collection.launchDate) }</span>)
                    :(<span className="inline-block bg-yellow-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Comming soon.</span>)}
            </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
                <MyButton 
                    name={"Remember Me"} 
                    onClick={()=>{
                        onReminderClicked(collection)
                    }}
                />
                {" "}
                <MyButton 
                    name={"Edit"}
                    buttonStyle="secondary"
                    onClick={()=>{
                        onEditClicked(collection)
                    }}
                />
                
            </div>
        </div>
    </div>
    ); */
}

export default CollectionGrid;