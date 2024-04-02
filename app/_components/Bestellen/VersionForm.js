"use client"

import { useState } from "react"

export default function VersionList(props) {
   const versions = props.versions

   const [selectedVersion, setSelectedVersion] = useState()

   function selectVersion(versionIndex) {
      setSelectedVersion(versionIndex)
   }

   var oneVersion

   if(versions.length == 1) {
     oneVersion = true
   } else {
     oneVersion = false
   }

   return (
      <>
         {oneVersion && <span className="font-medium text-lg">Prijs: €{versions[0].price.toLocaleString('nl-NL', {minimumFractionDigits: 2})}</span>}
         {!oneVersion && 
            <div className="flex flex-wrap gap-4">
               {
                  versions.map((version) => {
                     return (
                        <button key={versions.indexOf(version)} className={"flex flex-col items-center justify-center flex-grow border-2 rounded-lg p-4" + (selectedVersion == versions.indexOf(version) ? " bg-zinc-200" : "")} onClick={() => selectVersion(versions.indexOf(version))}>
                           <span className="font-bold">{version.name}</span>
                           <span>€{version.price.toLocaleString('nl-NL', {minimumFractionDigits: 2})}</span>
                        </button>
                     )
                  })
               }
            </div>
         }
         <button className="flex items-center justify-center gap-1 bg-blue-400 rounded-full py-3 text-white text-lg font-bold"><svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>Toevoegen</button>
      </>
   )
}
