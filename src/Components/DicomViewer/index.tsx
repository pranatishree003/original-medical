import React, { useRef, useEffect, useState } from 'react';
import * as cornerstone from 'cornerstone-core';
import * as dicomParser from 'dicom-parser';
import cornerstoneFileImageLoader from 'cornerstone-file-image-loader';
import 'cornerstone-tools';

const DicomViewer = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [metadata, setMetadata] = useState<Record<string, string | undefined>>(
    {}
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    cornerstoneFileImageLoader.external.cornerstone = cornerstone;

    cornerstone.registerImageLoader(
      'file',
      cornerstoneFileImageLoader.loadImage
    );
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      setIsLoading(true);

      reader.onload = (e) => {
        try {
          const arrayBuffer = e.target?.result as ArrayBuffer;
          const dataSet = dicomParser.parseDicom(new Uint8Array(arrayBuffer));

          console.log('Parsed DICOM file:', dataSet); // Debugging

          // Extract metadata
          setMetadata({
            patientName: dataSet.string('x00100010') || 'N/A',
            studyDate: dataSet.string('x00080020') || 'N/A',
            modality: dataSet.string('x00080060') || 'N/A',
          });

          // Add file to cornerstoneFileImageLoader and create imageId
          const imageId = cornerstoneFileImageLoader.fileManager.add(file);

          // :ERROR: Not Loading DICOM Image :TODO:
          cornerstone
            .loadImage(imageId)
            .then((image: cornerstone.Image) => {
              if (elementRef.current) {
                cornerstone.displayImage(elementRef.current, image);
              }
            })
            .catch((err: Error) => {
              setError(
                `Failed to display the DICOM image. ${JSON.stringify(err)}`
              );
            });
        } catch (err) {
          setError(`Failed to load the DICOM file. ${err}`);
        } finally {
          setIsLoading(false);
        }
      };

      reader.readAsArrayBuffer(file);
    } else {
      setMetadata({});
      setError('No file selected');
    }
  };

  useEffect(() => {
    if (elementRef.current) {
      cornerstone.enable(elementRef.current);
    }

    const element = elementRef.current;

    return () => {
      if (element) {
        cornerstone.disable(element);
      }
    };
  }, []);

  return (
    <div className='p-4'>
      <input
        type='file'
        accept='.dcm'
        onChange={handleFileChange}
        className='block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100 mb-4'
      />

      {isLoading && <p>Loading DICOM file...</p>}
      {error && <p className='text-red-500'>{error}</p>}

      <div
        ref={elementRef}
        style={{ width: '512px', height: '512px', border: '1px solid black' }}
      />

      <div className='mt-4'>
        <h3 className='text-lg font-bold mb-2 underline'>Metadata</h3>
        <p>
          <strong>Patient Name:</strong> {metadata?.patientName}
        </p>
        <p>
          <strong>Study Date:</strong> {metadata?.studyDate}
        </p>
        <p>
          <strong>Modality:</strong> {metadata?.modality}
        </p>
      </div>

      <hr className='mt-4 mb-4' />

      <div className='mt-4'>
        <h3 className='text-lg font-bold mb-2 underline'>Complete Data:</h3>
        <pre>
          <code>{JSON.stringify(metadata, null, 4)}</code>
        </pre>
      </div>
    </div>
  );
};

export default DicomViewer;

// /**
//  * const data = {
//   isTrusted: true,
//   bubbles: false,
//   cancelBubble: false,
//   cancelable: false,
//   composed: false,
//   currentTarget: null,
//   defaultPrevented: false,
//   eventPhase: 0,
//   returnValue: true,
//   srcElement: null,
//   target: null,
//   timeStamp: 152249.09999999963,
//   type: 'error',
// };
//  */
