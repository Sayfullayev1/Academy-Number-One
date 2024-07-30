import React from 'react'
import './page-sectionComponent.css'


import video from "../../../video/47116636_1398629244120351_1238740285526184807_n.mp4"


export default function PageSectionComponent() {


    const videoData = [
        {
            titlePhoto: "https://s3-alpha-sig.figma.com/img/cb1e/1b37/08b363dcc1fa6dd38a0fb0a6effc5e27?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wa95hVVHN5QJuzGB3QyCK07Zc44fHLkOW7eUZ1~lIDeQYfZj1iBla73KVQ22s-tU8UED5kvTX68xv9bblicB6zx7-bhKGPLOpOUCsRY~BDxH73Xmax1xxUIjgQRphneCl6qH8Te7fermOS54nQv0N9t68DKnCE-sVvTegP-ZAGaYOy3hOnQ8Uw~39w5grd7S5JfsFhTM6V233bwUu7SVAb68oE-MhHU20cp7luvhqbZIPWvXOX2ewg9ikSHFX5JR~aXpm8wrGT2wmdoPMTIM-WgUDEYW8B4yN8-wmyxPZuAWS4qhWOuAoPYHLznpu5RFaAhO3iA7hAObA2K99K7jWg__"
        },
        {
            titlePhoto: "https://s3-alpha-sig.figma.com/img/cb1e/1b37/08b363dcc1fa6dd38a0fb0a6effc5e27?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wa95hVVHN5QJuzGB3QyCK07Zc44fHLkOW7eUZ1~lIDeQYfZj1iBla73KVQ22s-tU8UED5kvTX68xv9bblicB6zx7-bhKGPLOpOUCsRY~BDxH73Xmax1xxUIjgQRphneCl6qH8Te7fermOS54nQv0N9t68DKnCE-sVvTegP-ZAGaYOy3hOnQ8Uw~39w5grd7S5JfsFhTM6V233bwUu7SVAb68oE-MhHU20cp7luvhqbZIPWvXOX2ewg9ikSHFX5JR~aXpm8wrGT2wmdoPMTIM-WgUDEYW8B4yN8-wmyxPZuAWS4qhWOuAoPYHLznpu5RFaAhO3iA7hAObA2K99K7jWg__"
        },
        {
            titlePhoto: "https://s3-alpha-sig.figma.com/img/7144/78ff/21c8257a6ac1ed6712f86a0ced671606?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FYuzN5-xUlOourZmYuywBj5ZBmxY37Wk-F16euuut2slYiUAbaWY4LfXJj2tK~u-6IDiwwsLIw2gFkM84kAGfXrUP2-Fc9AenvrLIUtcBOp7-BNCVXT1dn-hEdOoDP3eH9te2moYug2qXfxojalCvRy~BA3407ADmJLrcFdHklYmFIUthFiOsf3S8c0GWwTeD7SqkAuvcXxu-PM636DR~IKj4hFJM~l7msLln0m8Tqne2krFJ5NhjhlyfCv9DTeCyKpWdqfwnJH1m2~rAf41HPu03G0v2ScZd-ArohaY8anPkrR78xU~xz76piuHHVRcLIJ07Cl3aQg2rue07~NoEQ__"
        },
        {
            titlePhoto: "https://s3-alpha-sig.figma.com/img/6ad0/557d/74e007c1c23efef45ab5a81dfda0cbdf?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3~~671BETLL7SaEjaO5rMXTpS0xiBnhQ3fEYFUhm22qcKzzIVFMShAe4iIkVFGaUR~WLMIXSw8OTJHsuUrx1Og9aOXSqRyzSlm-6aTYp4U5EE87r8fW7EUWNZVO7JGIHRl1Z7d9-BLu3SfTVxsGdIM50n7lCUBJCU~zHBQZ3pedPgu9gC4Qewo~XZWIGf4pMhRUF-f9viKdJxafuM3IwWu1ATlLVHjgqzpNspGE-mTV8oc1~ejBg1hDSE8VOL05tdZ09DDBRQIgLmMMH7nLZDgc2t4Mk6Tr-y0sLRhh81eicsVVUU62cI5S2cIrIecpLJHk~ytUc6WzwVCMAElAtA__"
        },
    ]


  return (
    <section className='page-section'>




        <div className='page-section__videoWrapper'>


            <div className='page-section__videoWrapper__text'>

                <h1>Kursimizni</h1>

                <h2>tamomlagan o’quvchilar</h2>

            </div>


            <div className='page-section__videoWrapper__wrap'>
                {
                    videoData?.map( (item) => {
                        return(
                            <div className='page-section__videoWrapper__video'>
                                <video src={video} poster={`${item.titlePhoto}`} controls></video>
                            </div>
                        )
                    })
                }
            </div>


        </div>




        <div></div>


      

    </section>
  )
}
