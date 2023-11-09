
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="max-w-3xl mx-auto py-8">
                <div className="mb-8">
                    <button className="text-indigo-500 inline-flex items-center">
                        <FiArrowLeft className="mr-2" />
                        <Link to="/"> Back to Homepage</Link>
                    </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">What is One-way Data Binding?</h1>
                    <p className="text-gray-700">
                        One-way data binding is a data flow architecture in which data is only
                        transferred from the data source to the
                        view (UI). Changes in the data source are reflected in the view, but not
                        the other way around. 
                    </p>
                </div>
                <div className="bg-white p-4 mt-4 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">What is NPM in Node.js?</h1>
                    <p className="text-gray-700">
                        NPM is a package manager for JavaScript and Node.js.
                        It is used to manage and distribute open-source JavaScript libraries and
                        packages. It also provides a way to run
                        scripts and manage project configurations.
                    </p>
                </div>
                <div className="bg-white p-4 mt-4 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">Difference Between MongoDB and MySQL</h1>
                    <p className="text-gray-700">
                        MongoDB and MySQL are both popular database management systems, but they
                        have some key differences:
                        <ul className="list-disc pl-8">
                            <li>
                                <strong>Data Model:</strong> MongoDB is a NoSQL database that uses
                                a document-based data model, while MySQL is a relational database
                                that uses tables with structured schemas.
                            </li>
                            <li>
                                <strong>Scalability:</strong> MongoDB is horizontally scalable and
                                can handle large amounts of unstructured data, while MySQL is
                                vertically scalable and more suitable for structured data.
                            </li>
                            <li>
                                <strong>Schema:</strong> MongoDB has a dynamic schema, which means
                                you can change the structure of documents without affecting the
                                existing data. MySQL has a fixed schema, and changes require schema
                                migrations.
                            </li>
                            <li>
                                <strong>Query Language:</strong> MongoDB uses a flexible JSON-like
                                query language, while MySQL uses SQL (Structured Query Language).
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;