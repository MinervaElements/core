import styles from "./Pricing.module.css";
import { FcApproval,FcCancel } from "react-icons/fc";
const plansData = [
  {
    color:'#8b74ba',
    pricing:{
      name:'Startup',
      price:100,
      time:'Pago unico'
    },
    features:[
      {
        name:'Feature 1',
        status:true,
      },
      {
        name:'Feature 2',
        status:true,
      },
      {
        name:'Feature 3',
        status:false,
      },      {
        name:'Feature 4',
        status:false,
      }
    ]
  },
  {
    color:'#4cb992',
    pricing:{
      name:'Enterprise',
      price:200,
      time:'Pago unico'
    },
    features:[
      {
        name:'Feature 1',
        status:true,
      },
      {
        name:'Feature 2',
        status:true,
      },
      {
        name:'Feature 3',
        status:true,
      },      {
        name:'Feature 4',
        status:false,
      }
    ]
  },
  {
    color:'#3499e1',
    pricing:{
      name:'Enterprise',
      price:200,
      time:'Pago unico'
    },
    features:[
      {
        name:'Feature 1',
        status:true,
      },
      {
        name:'Feature 2',
        status:true,
      },
      {
        name:'Feature 3',
        status:true,
      },      {
        name:'Feature 4',
        status:false,
      }
    ]
  },
  {
    color:'#eb9d53',
    pricing:{
      name:'Enterprise',
      price:200,
      time:'Pago unico'
    },
    features:[
      {
        name:'Feature 1',
        status:true,
      },
      {
        name:'Feature 2',
        status:true,
      },
      {
        name:'Feature 3',
        status:true,
      },      {
        name:'Feature 4',
        status:false,
      }
    ]
  }
]
export default function Pricing() {
  return (
    <section>
      <div className="">
        <h2>Planes</h2>
      </div>
      <div className={styles["plans-container"]}>
      {
        plansData.map((plan,i) => <div key={i} className={styles["plans-container"]}>
        <div className={styles["box-plans"]} style={{backgroundColor:plan.color}}>
          <div className={styles["box-pricing-info"]} style={{color:plan.color}}>
            <span className={styles["box-plan-name"]} > { plan.pricing.name} </span>
            <span className={styles["box-plan-price"]}>${ plan.pricing.price}</span>
            <span className={styles["box-plan-time"]}>{ plan.pricing.time}</span>
          </div>
          <div className={styles["box-plan-features"]}>
            <ul>
              {
                plan.features.map((feature,key) => <li className={styles["box-plan-list-item"]} key={key + i}> { feature.status ? <FcApproval size={20}/>:<FcCancel size={20} color="#f00"/> } <span>{feature.name}</span> </li>)
              }
            </ul>
            <button className={`btn ${styles['btn-plan']}`} style={{color:plan.color}}>GET PLAN</button>
          </div>
        </div>
    </div>)
      }

      </div>
    </section>
  );
}
