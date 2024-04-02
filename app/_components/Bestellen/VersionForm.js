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
                        <button key={versions.indexOf(version)} className={"flex flex-col items-center justify-center flex-grow border-2 rounded p-4" + (selectedVersion == versions.indexOf(version) ? " bg-zinc-200" : "")} onClick={() => selectVersion(versions.indexOf(version))}>
                           <span className="capitalize font-bold">{version.name}</span>
                           <span>€{version.price.toLocaleString('nl-NL', {minimumFractionDigits: 2})}</span>
                        </button>
                     )
                  })
               }
            </div>
         }
         <button className="bg-green-600 rounded-full h-10 text-white font-medium">Toevoegen</button>
      </>
   )
}
