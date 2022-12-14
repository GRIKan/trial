import React from 'react';
import { useParams } from 'react-router-dom';
import '../Results/Results.css';
import experiments from '../Data/experiments.json';
import results from '../Data/results.json';

const Results = () => {
    const { id } = useParams();
    const exp= experiments.find(item => item.exp_id === id);
    // console.log(exp);
    const res= results.filter(item => item.exp_id === id);
    // console.log(res);

    var nofcat= 0;
    var nofcom= 0;
    res.map(item => {
        nofcat+= item.data[item.data.length-1].cat_id;
        if (item.comments !== "") {
            nofcom+= 1;
        };
        return true;
    });

    var text1= "card_id,card_name,cat_id,cat_name,user_id\r\n";
    var text2= "comments,user_id\r\n";
    var text= "";
    var filename= "";
    
    if (res === undefined) {
        window.location.pathname= "/dashboard";
    };

    const makecsv = () => {
        var counter= 0;
        res.map(items => {
            items.data.map(item => {
                text= text + item.card_id + ",";
                text= text + item.card_name + ",";
                text= text + (item.cat_id + counter) + ",";
                text= text + item.cat_name + ",";
                text= text + items.res_id;
                text= text + "\r\n";
                return counter;
            });
            counter+= items.data[items.data.length-1].cat_id;
            return text;
        });
        // console.log(text);
    };

    const makecom = () => {
        res.map(item => {
            text= text + item.comments + ",";
            text= text + item.res_id;
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
                        ??????????????????????????:
                        <br />
                        {res.length}
                    </div>
                </div>
                <div className= "respost" id= "categories">
                    <div className= "resposttext">
                        ????????????????????:
                        <br />
                        {nofcat}
                    </div>
                    </div>
                <div className= "respost" id= "comments">
                    <div className= "resposttext">
                        ????????????:
                        <br />
                        {nofcom}
                    </div>
                </div>
            </div>
            <div className= "resexport">
                <div id= "resexp">
                    ?????????????? ????:
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
                            ???????????? (.csv)
                        </label>
                    </div>
                    <input type= "submit" value= "??????????????" id= "resdownload" onClick= {maketext} />
                </form>
            </div>
        </div>
    )
}

export default Results;