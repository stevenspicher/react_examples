const DataList = ({ info }) => {
    console.log(info)
    return (
        <div className="blog-list">
            

        
            {info.map(data => (
                <>
                <div className="blog-preview"><h2>{data.title}</h2></div>
                <div className="blog-preview"><p> {data.body}</p></div>
                </>
                    
                    
                    
                    
               
            ))}    
        </div>        
    )
           
  }

            export default DataList;
