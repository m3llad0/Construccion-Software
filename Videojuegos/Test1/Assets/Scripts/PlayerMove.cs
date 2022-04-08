/*Control of the player

Diego Mellado Oliveros*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class movement : MonoBehaviour
{   
    Vector3 move;
    Rigidbody2D r2bd;

    // Start is called before the first frame update
    void Start()
    {
        r2bd = GetComponent<Rigidbody2D>();
    }
    // Update is called once per frame
    void Update()
    {
        move.x = Input.GetAxis("Horizontal");

        // transform.position += move;
        r2bd.velocity = move;
    }
}
