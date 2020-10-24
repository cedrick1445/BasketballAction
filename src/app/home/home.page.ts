import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  type: string;
  dateMessage: string;


  constructor(
    private loadingController: LoadingController,
    private router: Router
  ) {
    setInterval(() => {
      let currentDate=new Date();
      this.dateMessage = currentDate.toDateString()+' '+ currentDate.toLocaleTimeString();
      // console.log(this.dateMessage)
      }, 1000);
  }

  async basicDetails(guidefootball) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    this.router.navigate(['basic-details', {
        'id': guidefootball.id,
        'title': guidefootball.title,
        'description': guidefootball.description,
        'full_description': guidefootball.full_description
    }
  ])

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async advanceDetails(guidefootballAdvance){
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: 'Please wait....',
      duration: 2000
    });
    await loading.present();
    this.router.navigate(['advance-details', {
      'id': guidefootballAdvance.id,
      'title': guidefootballAdvance.title,
      'description': guidefootballAdvance.description,
      'full_description': guidefootballAdvance.full_description
    }
  ])
  }

  segmentChanged(ev: any) {
    console.log('segment changed', ev);
    }

    ngOnInit() {
      this.type = 'basic'
    }


    guidefootballs = [
      {
      "id": 1,
      "title": "LAY-UP",
      "description": "../assets/icon/layup.png",
      "full_description": "A layup is the activity of a player spilling towards the circle, making two strides, and afterward laying the ball into the loop off the backboard."
      },
      {
      "id": 2,
      "title": "SHOOTING",
      "description": "../assets/icon/favicon.png",
      "full_description": "Shooting is where the magic happens, regardless of whether heading to the hoop, pulling up in the lane, or release the ball from long range, shooting can represent the moment of truth of the team's offensive effectiveness."
      },
      {
      "id": 3,
      "title": "REBOUNDING",
      "description": "../assets/icon/favicon.png",
      "full_description": "Seemingly one of the most significant aspects to basketball, whoever controls the boards frequently controls the game. Rebounding allows groups or teams to keep up or regain the momentum of the game in offensive."
      },
      {
      "id": 4,
      "title": "PASSING",
      "description": "../assets/icon/favicon.png",
      "full_description": "Passing is the way in to an extraordinary group and an incredible colleague. In any circumstance a decent pass can leave the protection behind them and lead to another chance to score."
      },
      {
      "id": 5,
      "title": "DRIBBLING & BALLHANDLING",
      "description": "../assets/icon/favicon.png",
      "full_description": "Dribbling is one of the top offensive threats in ball other than shooting. Dribbling can offer chance to move the ball on offense, perused extreme protections or locate an open colleague for a shot. "
      },
      {
        "id": 6,
        "title": "DEFENSE",
        "description": "../assets/icon/favicon.png",
        "full_description": "With the offensive bases secured, defense in the ballhandler turns into a truly significant ability to smother the rival team's assault. The best defense can change the chances of any possession."
        }
      ]


      guidefootballAdvances = [
        {
        "id": 1,
        "title": "CROSSOVER",
        "description": "Picture or Animation dito",
        "full_description": "A Crossover dribble is a b-ball move in which a player dribbling the ball switches the ball quickly from one hand to the next, to roll out an improvement in heading or driving to the basket."
        },
        {
        "id": 2,
        "title": "EURO STEP",
        "description": "Picture or Animation dito",
        "full_description": "The euro step is a move in b-ball where the ball handler gets their dribble, makes a step in one way or direction, at that point quickly makes a second and explosive drive in the other way."
        },
        {
        "id": 3,
        "title": "DUNK or SLAM DUNK",
        "description": "Picture or Animation dito ",
        "full_description": "A shot made by jumping high into the air and hammering the ball down through the loop from above with one or two hands. It considers an ordinary two-point field objective in the game."
        },
        {
        "id": 4,
        "title": "STEAL",
        "description": "Picture or Animation dito",
        "full_description": "Steel happens when a defensive player lawfully causes a turnover by his aggressive and forceful actions. This should be possible by avoiding and controlling, or by getting the opponent's pass or dribble of a offensive player."
        },
        {
        "id": 5,
        "title": "Zone Defense",
        "description": "Picture or Animation dito",
        "full_description": "A defensive methodology where every defensive player covers a specific region of the court, rather than guarding a particular player on the other group. It's utilized in b-ball, which is the choice to man-to-man defense; rather than every player guarding a comparing player on the other group, every defensive player is given a zone or territory to cover."
        },
        {
        "id": 6,
        "title": "Blocking",
        "description": "Picture or Animation dito",
        "full_description": "a way of stopping the opponent player by utilizing one or two hands or blocking the way of a moving player. It's happening when a guarded or defensive player lawfully redirects a field objective endeavor from an offensive player. The defender isn't permitted to connect with the offensive player's hand (except if the protector or the defender is additionally in contact with the ball) or a foul is called. To be legal, the block should happen while the shot is voyaging upward or at its pinnacle."
        }
        
        
        ]
      



}
