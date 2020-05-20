
  
  export default [
    // user login
    {
      url: '/getList',
      type: 'post',
      response: () => {
        return {
            code: 0,
            data: {
              list:[
                {
                  amg: '1',
                  titlie: '2',
                  date:'3',
                  bet:'4',
                  price:'5'
                },
                {
                  amg: '1',
                  titlie: '2',
                  date:'3',
                  bet:'4',
                  price:'5'
                },
                {
                  amg: '1',
                  titlie: '2',
                  date:'3',
                  bet:'4',
                  price:'5'
                },
              ]
            }
        }
      }
    },
    
  ]
  