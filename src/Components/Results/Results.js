import React from 'react';
import { useParams } from 'react-router-dom';
import '../Results/Results.css';
import experiments from '../Data/experiments.json';
import results from '../Data/results.json';

const Results = () => {
    const { id } = useParams();
    const exp= experiments.find(item => item.exp_id === id);
    const res= results.find(item => item.exp_id === id);

    var text1= "card_id,card_name,cat_id,cat_name,user_id\r\n";
    var text2= "comments,user_id\r\n";
    var text= "";
    var filename= "";
    
    if (res === undefined) {
        window.location.pathname= "/dashboard";
    };

    // console.log(exp);

    const makecsv = () => {
        
        (res.data).map(item => {
            text= text + item.card_id + ",";
            text= text + item.card_name + ",";
            text= text + item.cat_id + ",";
            text= text + item.cat_name + ",";
            text= text + item.user_id;
            text= text + "\r\n";
            return text;
        });
        // console.log(text);
    };

    const makecom = () => {
        (res.comments).map(item => {
            text= text + item.comment + ",";
            text= text + item.user_id;
            text= text + "\r\n";
            return text;
        });
        // console.log(text);
    };

    const maketext = () => {
        var el = document.querySelector('input[name="expfile"]:checked').value;

        if (el === "csv") {
            filename= exp.name + exp.type + ".csv";
            text= text1;
            makecsv();
        }
        else if (el === "text") {
            filename= exp.name + exp.type + ".txt";
            text= text1;
            makecsv();
        }
        else {
            filename= exp.name + "comments.csv"
            text= text2;
            makecom();
        };
    };

    const downloadfile = (e) => {
        e.preventDefault();
        const link = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href);
    };

    return (
        <div className= "results" id= "containerdscrollbar">
            <div className= "resinfo">
                <div className= "respost" id= "participants">
                    <div className= "resposttext">
                        Συμμετέχοντες:
                        <br />
                        {res.participants}
                    </div>
                </div>
                <div className= "respost" id= "categories">
                    <div className= "resposttext">
                        Κατηγορίες:
                        <br />
                        {res.data[res.data.length-1].cat_id}
                    </div>
                    </div>
                <div className= "respost" id= "comments">
                    <div className= "resposttext">
                        Σχόλια:
                        <br />
                        {res.comments.length}
                    </div>
                </div>
            </div>
            <div className= "resexport">
                <div id= "resexp">
                    Εξαγωγή ως:
                </div>
                <form className= "resradio" onSubmit= {downloadfile}>
                    <div className= "resradiobut">
                        <input type="radio" id="rescsv" name= "expfile" value="csv" required />
                        <label htmlFor= "rescsv" className= "radiobut" >
                            CSV
                        </label>
                    </div>
                    <div className= "resradiobut">
                        <input type="radio" id="restext" name= "expfile" value="text" required />
                        <label htmlFor= "restext" className= "radiobut" >
                            Txt
                        </label>
                    </div>
                    <div className= "resradiobut">
                        <input type="radio" id="rescom" name= "expfile" value="comments" required />
                        <label htmlFor= "rescom" className= "radiobut" >
                            Σχόλια (.csv)
                        </label>
                    </div>
                    <input type= "submit" value= "Εξαγωγή" id= "resdownload" onClick= {maketext} />
                </form>
            </div>
        </div>
    )
}

export default Results;