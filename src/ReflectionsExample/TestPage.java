package ReflectionsExample;

import java.lang.reflect.*;

//Mocking inheritance
public class TestPage extends TestClass{


    public static void main(String args[])
    {
        //Instantiating ReflectionsExample.TestClass
        TestClass test = new TestClass();
        //Setting string1 to "Test String1"
        test.setString1("Test String1");

        //Instantiating ReflectionsExample.Text Class
        Text text = new Text(test.getString1());
        //Setting string1 to "Test String1"

        //Global Instantiation
        Method[] m;
        Field[] f;
        Method methodToInvoke;
        Field fieldToInstantiate;
        Method methodToInvokeWithField;

        //Dump methods and fields
        //Forces Exception Handling
        try {
            //Declares class to be scanned
            Class c = Class.forName("ReflectionsExample.TestClass");

            //Scans and pulls all methods into method array
            m = c.getDeclaredMethods();

            //Scans and pulls all fields into field array
            f = c.getDeclaredFields();

            //Loops and prints all methods from method array
            for (int i = 0; i < m.length; i++)
                System.out.println("Method array " + i + ": " + m[i]);

            //Loops and prints all fields from field array
            for (int i = 0; i < f.length; i++)
                System.out.println(("Field array " + i + ": " + f[i]));


            //Instantiating methodToInvoke to point to method; Assuming m[1] is known.
            methodToInvoke = m[1].getDeclaringClass().getMethod(m[1].getName());

            //Print when methodToInvoke calls invoke()
            System.out.println("Using method invoke: " + methodToInvoke.invoke(test));

            //Look at getInstanceOf
            //Instantiating fieldToInvoke to point specifically to ReflectionsExample.Text.java type
            fieldToInstantiate = f[1].getDeclaringClass().getDeclaredField("txtString1");

            //Instantiating methodToInvokeWithField to invoke
//            methodToInvokeWithField = f[1].getDeclaringClass().getMethod("getStringFromTextClass");
            methodToInvokeWithField = f[1].getType().getMethod("getStringFromTextClass");
            System.out.println("-------- f[1].getType(): " + f[1].getType());
            System.out.println("-------- methodToInvokeWithField.invoke(text): " + methodToInvokeWithField.invoke(text));

            //Print when fieldToInvoke calls invoke()
//            System.out.println("Using field declaration: " + fieldToInstantiate);



        }
        catch (Throwable e) {
            System.err.println(e);
        }

        System.out.println("Using getter method: " + test.getString1());
    }
}