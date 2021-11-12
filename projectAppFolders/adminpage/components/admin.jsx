import{ Form, Modal, Container, Button } from 'react-bootstrap'
import { useState, useEffect} from 'react'

/******************************************
 * INSTALL INSTRUCTIONS TO USE THIS ADMIN PAGE IN THE BLOG*
 * 
 * This moves the default content into local storage and allows us to add more information. 
 * the information will remain in your browser until you clear local storage, click 'reset site'
 * on the Admin Modal, or when the storage is cleared by the browser. (Not sure of the timing on that). 
 
1. place this file inside your project and import it into App.js from wherever you placed it.  
 
1. Create the content file as an Array in this EXACT format (you can add more lines to your blog objects, 
but it needs to be one array with objects for this admin page to work as is): 

let defaultContent = [
  {
    title: "name of first blog"
    author: "who wrote it"
    description: "a few lines about the blog"
  },
  {
    title: "name of second blog"
    author: "who wrote it"
    description: "a few lines about the blog"
  },
    {
    title: "name of third blog"
    author: "who wrote it"
    description: "a few lines about the blog"
  }
]

export defaultContent;

This example imports this file into App.js as defaultContent. if you use something else, change the references in the 
lines below accordingly. 

2. Wherever you imported your data file ((probably App.js), set up a useState at the top of the component:
     
      const [content, setContent] = useState(defaultContent) //set the initial state to the imported data file

      (if you have already set this state up, you can replace [content, setContent] with whatever you want to call 
      the state variable tracking your entire blog content)

3. Add these lines inside your App component BEFORE the return in App Component:

  const [show, setShow] = useState(false); //sets show to false, which keeps the Modal from loading
  const handleShow = () => setShow(true); //function to change show to true and load Modal

4.  Add these lines inside your App component INSIDE the return:

  <Button variant="secondary" onClick={handleShow}>Admin</Button>  //stick this where you want the button to show
  <Admin content={content} updateContent={setContent} defaultContent={defaultContent} setShow={setShow} show={show} />

    ***if you used something other than content, setContent, or defaultContent above, update the corresponding info 
    in the brackets where we are passing the props in the above line. 
 
3. IF YOU ADD CONTENT TO YOUR DATA FILE, in order to be able to add that content for new blogs via this page, 
    add another line in this file (admin.jsx) inside the form starting on line 120 that looks like this:

         <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder=OOOOOOOO name=OOOOOOO onChange={updateField}/> 

         change OOOOOOOO  for both placeholder and name to the key of the new addition to your objects 
         so if you are adding a line like this: 
          authorBio: "the author was born at an early age"
          then OOOOOOO would be "authorBio".

          (I am working on automating this part, will send out an update when I have it)

END OF INSTALLATION INSTRUCTIONS - let me know if it is not working for you.
 
*****************************************/


/*
updateContent is now the name of the function that updates content, 
content is still the list plus (eventually) any additions, 
 defaultContent gives us access to the data file in order to reset the site to original conditions.
 setShow(function) and show(boolean) are for the modal.*/

const Admin = ({updateContent, defaultContent, content, setShow, show}) => {

const [response, setResponse] = useState({title: ""}); //we use this to keep track of the form input, see handleSubmit
 
//check to see if local storage has content, and if not set updated library to what is in local storage
  useEffect(() => {
    let storedContent = JSON.parse(localStorage.getItem("storedContent"));
    storedContent ? updateContent(storedContent) : localStorage.setItem("storedContent", JSON.stringify(content))
  },[updateContent])

//puts whatever is in library into local storage when library changes
  useEffect(() => {
   localStorage.setItem("storedContent", JSON.stringify(content))  
  }, [content])
  
  //this function takes the form responses and makes them in to a key value pair, then puts it into 'response'
  const updateField = (e) => {
      setResponse({
          ...response,
          [e.target.name]: e.target.value
      })  
  }

  const handleClose = () => setShow(false);

 // reset the site to original content   
  const resetSite = () => {
    handleClose();
    updateContent(defaultContent);
  }

//send updated library content back to app.js
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
        let updateContentArr =[
            response, 
            ...content];
          console.log(response)
          if (response.title) {   //this is to fix adding an empty {} to updateArr on submit
         updateContent(updateContentArr)  
        setResponse({}) 
          }
    }
    
     return (
      <Container >
      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark text-white p-3" closeButton>
          <Modal.Title >Update Content</Modal.Title>
        </Modal.Header>
          <Form className="bg-secondary" >
            {/* add lines here to match the keys in your objects within the data file */}
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="title" name='title' onChange={updateField}/> 
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="author" name='author' onChange={updateField}/> 
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" as="textarea" placeholder="description" name="description" aria-label="With textarea" onChange={updateField}/>
          </Form>
        <Modal.Footer className="bg-dark">
          <Button size="sm" variant="secondary" onClick={resetSite}>Reset Site</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
      </Container>
    )
}

export default Admin
