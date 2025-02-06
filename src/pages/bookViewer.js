import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./bookViewer.css"




const PdfViewer = () => { 
  const books = useSelector((state) => state.books.books);
  const {id}  = useParams()
  const selectedBook = books.find((book) => book.id === Number(id));
  const pdf = selectedBook ? selectedBook.document :null ;
    
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
    return (
      <div className="pdf-viewer">
        {pdf ? (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        ) : (
          <p className='message' >No document found for this book.</p>
        )}
      </div>
    );
  };
  
  export default PdfViewer;
